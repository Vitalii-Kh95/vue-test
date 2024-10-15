import random
import urllib.request
import os
import shutil
from faker import Faker
from django.core.management.base import BaseCommand
from django.conf import settings
from django.contrib.auth.models import User
from taggit.models import Tag
from core.models import Post


H1_WORD_COUNT = 5
TITLE_WORD_COUNT = 5
DESCRIPTION_PARAGRAPH_COUNT = 20
CONTENT_PARAGRAPH_COUNT = 200
TAGS_TO_CREATE_IF_NONE_EXISTS = 12
MIN_IMAGE_WIDTH = 854
MAX_IMAGE_WIDTH = 1920
MIN_IMAGE_HEIGHT = 480
MAX_IMAGE_HEIGHT = 1080


class Command(BaseCommand):
    """Creates a number of fake posts"""

    def add_arguments(self, parser):
        parser.add_argument("number_of_posts", type=int,
                            help='the number of fake Posts created')

    def handle(self, *args, **options):
        fake = Faker().unique

        if Tag.objects.all().count() == 0:
            for _ in range(TAGS_TO_CREATE_IF_NONE_EXISTS):
                Tag.objects.create(name=fake.word())

        for _ in range(options["number_of_posts"]):

            url = fake.image_url(width=random.randint(
                MIN_IMAGE_WIDTH, MAX_IMAGE_WIDTH),
                height=random.randint(MIN_IMAGE_HEIGHT, MAX_IMAGE_HEIGHT))
            while "dummyimage" in url:
                url = fake.image_url(width=random.randint(
                    MIN_IMAGE_WIDTH, MAX_IMAGE_WIDTH),
                    height=random.randint(MIN_IMAGE_HEIGHT, MAX_IMAGE_HEIGHT))
            file_name = fake.file_name(category='image', extension="png")

            with urllib.request.urlopen(url=url, timeout=10) as response:
                os.makedirs(os.path.dirname(
                    f'{settings.MEDIA_ROOT}/images/'), exist_ok=True)
                with open(f'{settings.MEDIA_ROOT}/images/{file_name}', 'wb') as out_file:
                    shutil.copyfileobj(response, out_file)

            post = Post.objects.create(
                # h1=fake.sentence(nb_words=H1_WORD_COUNT),
                title=fake.sentence(nb_words=TITLE_WORD_COUNT),
                description=fake.paragraph(
                    nb_sentences=DESCRIPTION_PARAGRAPH_COUNT),
                content=fake.paragraph(nb_sentences=CONTENT_PARAGRAPH_COUNT),
                image=f'/images/{file_name}',
                author=User.objects.get(id=1),
            )
            post.tags.add(
                *random.sample(list(Tag.objects.all()), random.randint(1, 5)))
            post.save()
            self.stdout.write(self.style.HTTP_INFO(
                f'Created post: "{post}"...'))

        self.stdout.write(
            self.style.SUCCESS('Ended without errors')
        )
