<script lang="ts">
  import * as Select from "$lib/components/ui/select";
  let { data } = $props();
  const { countries } = $derived(data);
  const formattedNumber = new Intl.NumberFormat("en-US");

  const continents = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  let region = $state(null);

  function getCountriesByRegion(e: any) {
    region = e.detail.value;
    console.log(region);
  }
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

  <Select.Root portal={null} on:click={getCountriesByRegion}>
    <Select.Trigger
      on:click={getCountriesByRegion}
      class="py-8 w-[55vw] shadow-xl dark:placeholder:text-white
dark:bg-dark-el font-semibold text-base"
    >
      <Select.Value
        class="px-4 dark:placeholder:text-white
dark:bg-dark-el"
        placeholder="Filter by Region"
      />
    </Select.Trigger>
    <Select.Content
      class="dark:placeholder:text-white
dark:bg-dark-el"
    >
      <Select.Group>
        <Select.Label>Regions</Select.Label>
        {#each continents as continent}
          <Select.Item
            class="dark:placeholder:text-white
          dark:bg-dark-el"
            value={continent.value}
            label={continent.label}>{continent.label}</Select.Item
          >
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="region" bind:value={region} />
  </Select.Root>

  <div class="flex items-center justify-center px-12 py-10">
    {#await countries}
      <p class="text-center font-semibold">Fetching Countries...</p>
    {:then countries}
      <div>
        <ul>
          {#each countries as country}
            <li
              class="bg-white shadow-xl mb-10 rounded-b-md dark:outline-outline-dark dark:text-white
dark:bg-dark-el"
            >
              <div class="rounded-t-md">
                <img
                  class="rounded-t-md"
                  src={country.flags.svg}
                  alt="the flag of {country.name.official}"
                />
              </div>
              <div class=" px-6 pt-6 pb-12 text-base dark:bg-dark-el">
                <h2 class="font-bold text-lg mb-3">{country.name.common}</h2>
                <p class="text-light-text font-light">
                  <span class="font-semibold">Population:</span>
                  {formattedNumber.format(country.population)}
                </p>
                <p>
                  <span class="font-semibold">Region:</span>
                  {country.region}
                </p>
                <p>
                  <span class="font-semibold">Capital:</span>
                  {country.capital}
                </p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/await}
  </div>
</main>
