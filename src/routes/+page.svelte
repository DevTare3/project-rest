<script lang="ts">
  import * as Select from "$lib/components/ui/select";
  let { data } = $props();
  const { countries } = $derived(data);
  const formattedNumber = new Intl.NumberFormat("en-US");

  type Continent = {
    value: string;
    label: string;
  };

  let region: Continent | undefined = $state();

  let continents: Continent[] = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  function getCountriesByRegion(e: any) {
    region = e.value;
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

  <Select.Root portal={null} onSelectedChange={getCountriesByRegion}>
    <Select.Trigger
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
          {#if region === undefined}
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
          {/if}

          {#if region !== undefined}
            {#each countries as country}
              {#if country.region === region}
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
                    <h2 class="font-bold text-lg mb-3">
                      {country.name.common}
                    </h2>
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
              {/if}
            {/each}
          {/if}
        </ul>
      </div>
    {/await}
  </div>
</main>
