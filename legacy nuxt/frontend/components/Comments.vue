<template>
    <div>
        <div class="card my-4" v-if="loggedIn">
            <h5 class="card-header">Прокомментируй:</h5>
            <div class="card-body">
                <form @submit.prevent="addComment">
                    <div class="form-group">
                        <textarea v-model="new_comment" class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" :disabled="!isComplete" class="btn btn-primary">Отправить</button>
                </form>
            </div>
        </div>

        <div class="media mb-4" v-for="comment in refcomments" :key="comment.id">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
                <h5 class="mt-0">{{ comment.username }}</h5>
                {{ comment.text }}
            </div>
            <span v-if="loggedIn">
                <span v-if="comment.username === data.username">
                    <button class="btn btn-outline-danger my-2 my-sm-0 mr-2" type="submit"
                        @click.prevent="delComment(comment.id);">Удалить</button>
                </span>
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['comments', 'post_slug']);
const { status, token, data } = useAuth();
const refcomments = ref(props.comments);

const new_comment = ref('');
const isComplete = computed(() => {
    return new_comment.value;
})
const loggedIn = computed(() => {
    return status.value === 'authenticated';
});
async function addComment() {
    try {
        let response = await $fetch('http://localhost:8000/api/comments/', {
            method: 'POST',
            headers: {
                Authorization: token.value
            },
            body: {
                post: props.post_slug,
                username: data.value.username,
                text: new_comment.value,
            }
        });
        new_comment.value = '';
        refcomments.value.splice(0, 0, response);
    } catch (error) {
        console.log(error);
    }
};

async function delComment(id) {
    try {
        let response = await $fetch('http://localhost:8000/api/comments/delete/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: token.value
            }
        });
        refcomments.value = refcomments.value.filter((c) => c.id !== id);
    } catch (err) {
        this.err = err;
        console.log(err)
    }
}
</script>
<!-- {
    "id": 4,
    "post": "foreign-also-traditional",
    "username": "admin",
    "text": "comment number four. just test",
    "created_date": "2024-02-27T15:14:38.844117Z"
} -->