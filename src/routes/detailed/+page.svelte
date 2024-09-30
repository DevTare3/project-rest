<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  import { Button } from "$lib/components/ui/button";
</script>

<!-- {#snippet sameButton()}
{/snippet} -->

<div class="px-6 py-8">
  <Button
    class="rounded-sm bg-white text-light-text hover:bg-slate-200 shadow-lg font-light px-6  mt-0 mb-0 text-sm"
    href="./"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide mr-2 lucide-arrow-left"
      ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
    Back
  </Button>
  <div>
    <div>
      <div></div>
    </div>
  </div>
</div>
