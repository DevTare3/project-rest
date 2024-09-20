<script lang="ts">
  import "../app.css";
  const osTheme = $state("");
  const fill = $state("");
</script>

<header>
  <nav>
    <div
      class="bg-Very-Light-Gray-(Light-Mode-Background) dark:bg-Dark-Blue(Dark-Mode-Elements) flex items-center justify-between py-8 px-4"
    >
      <p
        class="text-Very-Dark-Blue-(Light-Mode-Text) dark:text-White-(Dark-Mode-text-Light-Mode-Elements)"
      >
        Where in the world?
      </p>
      <div class="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          class="lucide lucide-moon"
          ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
        >
        <p
          class="text-Very-Dark-Blue-(Light-Mode-Text) dark:text-White-(Dark-Mode-text-Light-Mode-Elements)"
        >
          Light Mode
        </p>
      </div>
    </div>
  </nav>
</header>

<slot></slot>
