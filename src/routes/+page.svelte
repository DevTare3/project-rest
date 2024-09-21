<script lang="ts">
  import * as Select from "$lib/components/ui/select";
</script>

<main class="bg-light-bg dark:bg-dark-bg px-6 py-8">
  <div
    class="flex items-center shadow-xl dark:outline dark:outline-[.8rem] dark:outline-outline-dark justify-center gap-6 py-5 px-8 mb-8 rounded-md bg-white dark:bg-dark-el"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-search"
      ><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg
    >
    <input
      class="outline-none font-normal dark:placeholder:text-white border-none bg-white dark:bg-dark-el text-black w-full"
      type="search"
      id="search"
      placeholder="Search for a country..."
    />
  </div>

  <Select.Root>
    <Select.Trigger class="py-8 w-[55vw] shadow-xl">
      <Select.Value class="px-2" placeholder="Filter by Region" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="africa">Africa</Select.Item>
      <Select.Item value="america">America</Select.Item>
      <Select.Item value="asia">Asia</Select.Item>
      <Select.Item value="europe">Europe</Select.Item>
      <Select.Item value="oceania">Oceania</Select.Item>
    </Select.Content>
  </Select.Root>
</main>
