<script lang="ts">
  const { children } = $props();
  import "../app.css";
  // import {osTheme,fill} from '../osTheme.svelte'
  // let isDark = $state(false);

  // function toggleTheme() {
  //   if(osTheme.state === "Dark Mode")
  // {
  //   osTheme.state = "Light Mode";
  //   fill.fill = "white"
  //   isDark = true;
    
  // }
  // else {
  //   osTheme.state = "Dark Mode";
  //   fill.fill = "black" 
  //   isDark = false;
  // }
  // }
function getThemeAsString({
  localStorageTheme,systemSettingDark
})
  {
    if(localStorageTheme !== null)
      {return localStorageTheme}

    if(systemSettingDark.matches)
      {return "dark"}

  return ""
  }


function updateThemeBtn({themeSwitchBtn, isDark})
{
  let switchMsg = isDark ? "Light Mode" : "Dark Mode";
  themeSwitchBtn.setAttribute("aria-label", switchMsg)
  themeSwitchBtn.innerText = switchMsg
}

function updateThemeOnHtml({theme})
{
  if(document.querySelector("html") !== null)
  {
    document.querySelector("html").setAttribute("data-theme", theme);
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
          fill="none"
          class="lucide lucide-moon"
          ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
        >
        <button>
          <p 
            class="text-light-text dark:text-white" aria-label="Change to light theme" data-theme-toggle
          >
            <!-- {osTheme.state} -->
          </p>
        </button>
      </div>
    </div>
  </nav>
</header>
<main>
  {@render children()}
</main>