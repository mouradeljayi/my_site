<template>
  <header>
    <nav class="d-flex justify-content-start p-3 border-bottom">
      <NuxtLink to="/" class="logo"> Mourad EL Jayi </NuxtLink>
      <div class="d-flex ms-3 align-items-center">
        <NuxtLink to="" class="nav-link"> About </NuxtLink>
        <NuxtLink to="" class="nav-link"> Contact </NuxtLink>
        <NuxtLink to="" class="nav-link"> Portfolio </NuxtLink>
        <NuxtLink to="" class="nav-link">
          Blog <span class="badge badge-sm bg-success px-2">soon</span>
        </NuxtLink>
      </div>
      <NuxtLink to="/" class="hire-me-btn btn btn-outline-success px-3 btn-sm me-5"> Hire me </NuxtLink>
    </nav>
  </header>
</template>

<style scope>
.logo {
  text-decoration: none;
  font-size: 20px;
  margin-left: 80px;
  font-weight: bold;
  color: #fff;
  border-right: 1px solid #ccc; 
  padding-right: 20px;
}
.nav-link {
  text-decoration: none;
  margin-right: 20px;
}

.nav-link:hover {
  color: grey;
}

.hire-me-btn {
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  position: absolute;
  right: 0;
}
</style>