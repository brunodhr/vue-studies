<template>
  <header class="header">
    <g-link to="/">
      <g-image src="~/favicon.png" width="50" />
    </g-link>
    <nav class="nav">
      <g-link class="link" to="/">{{ $static.metadata.siteName }}</g-link>
      <g-link class="link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style scoped lang="scss">
.header {
  padding: 0 15%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: white;
  margin-left: 20px;
  transition: 0.3s;
  &:hover {
    color: #42b883;
  }
}
</style>
