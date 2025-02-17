<script setup>
import FlexibleBlock from './FlexibleBlock.vue';
</script>

<template>
  <FlexibleBlock title="Practices">
    <slot>
      <ul>
        <li>
          <strong>RESTful API Design</strong> – Structuring APIs for maintainability and
          scalability.
        </li>
        <li>
          <strong>Database Modeling & ORM Usage</strong> – Designing relational data structures and
          interacting with databases through Django ORM.
        </li>
        <li>
          <strong>CSRF Protection</strong> – Managing security in session-based authentication.
        </li>
        <li>
          <strong>Secure Authentication</strong> – Handling user authentication with session-based
          and token-based approaches.
        </li>
        <li>
          <strong>Data Validation</strong> – Ensuring input integrity in Django and Vue forms.
        </li>
        <li>
          <strong>Code Maintainability</strong> – Writing structured, readable, and reusable code.
        </li>
        <li>
          <strong>Version Control Workflows</strong> – Using Git and GitHub for tracking changes and
          interacting with repositories.
        </li>
        <li>
          <strong>Frontend State Management</strong> – Using Pinia to handle application state in
          Vue.
        </li>
        <li>
          <strong>Component-Based UI</strong> – Structuring Vue components for reusability and
          clarity.
        </li>
        <li>
          <strong>Styling & UI Frameworks</strong> – Using Tailwind CSS and DaisyUI for efficient
          and responsive styling.
        </li>
        <li>
          <strong>Reverse Proxy & Static Hosting</strong> – Configuring Nginx to serve Vue frontend
          and Django backend efficiently.
        </li>
        <li>
          <strong>Deployment & Environment Management</strong> – Preparing for production with
          environment-specific configurations.
        </li>
      </ul>
    </slot>
  </FlexibleBlock>
</template>
