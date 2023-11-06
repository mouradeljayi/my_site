
<template>
  <footer class="d-flex justify-content-between align-items-center bg-success p-3">
    <div>
      <NuxtLink to="/" class="logo-footer"> Mourad EL Jayi </NuxtLink>
      <span class="ms-2">© 2023 </span>
    </div>


    <div class="d-flex align-items-center me-3">
      <a href="" target="_blank" class="nav-link">
        <BootstrapIcon name="github" />
      </a>
      <a href="" target="_blank" class="nav-link">
        <BootstrapIcon name="linkedin" />
      </a>
      <a href="" target="_blank" class="nav-link">
        <BootstrapIcon name="instagram" />
      </a>
    </div>
  </footer>
</template>
  
<style>
.logo-footer {
  text-decoration: none;
  font-size: 20px;
  margin-left: 80px;
  font-weight: bold;
  color: #fff;
}
.nav-link {
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;
}

.nav-link:hover {
  color: grey;
}
</style>