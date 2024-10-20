<script lang="ts">
  import { enhance } from "$app/forms";
  const { children } = $props();
  import "../app.css";
  let mode = $state('light');

  function changeTheme() {
    if(mode == 'light')
  {
    mode = 'dark'
  }

  else {
    mode = 'light'
  }
}

const submitUpdateTheme = ({action}) => {
  const theme = action.searchParams.get('theme');

  if(theme) {
    document.documentElement.setAttribute('class', theme + ' font-nunito'); 
  }
}

</script>

<header>
  <nav>
    <div
      class="bg-white dark:bg-dark-el flex items-center justify-between py-8 px-4 shadow-md"
    >
      <p
        class="text-light-text text-lg font-bold dark:text-white"
      >
        Where in the world?
      </p>
      <div class="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          class="lucide lucide-moon"
          ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
        >
        <form method="POST" use:enhance={submitUpdateTheme}>
            <button onclick={changeTheme} formaction="/?/setTheme&theme={mode}">
            <p
              class="text-light-text dark:text-white" aria-label="Change to light theme" data-theme-toggle
            >
             Change
            </p>
          </button>
        </form>
      </div>
    </div>
  </nav>
</header>
<main>
  {@render children()}
</main>