<script lang="ts">
  const { children } = $props();
  import "../app.css";
  const osTheme = $state("Dark Mode");
  const fill = $state("");

</script>

<header>
  <nav>
    <div
      class="bg-white dark:bg-dark-el flex items-center justify-between py-8 px-4 shadow-2xl"
    >
      <p
        class="text-light-text text-lg font-extrabold dark:text-white"
      >
        Where in the world?
      </p>
      <div class="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
          class="lucide lucide-moon"
          ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
        >
        <p
          class="text-light-text dark:text-white"
        >
          {osTheme}
        </p>
      </div>
    </div>
  </nav>
</header>

{@render children()}