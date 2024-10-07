<script lang="ts">
  let { data } = $props();
  const { country } = $derived(data);
  console.log(data);
  import { Button } from "$lib/components/ui/button";
</script>


{#snippet countryInfo(item)}
{#if item}
<div class="mt-12 mb-8">
  <img src={item.flags.svg} alt="The flag of {item.name.official}" />
</div>
<h1 class="text-lg font-bold mb-4">
  {item.name.common}
</h1>
<div class="mb-8">
  {#if item.name.nativeName}
  <p class="mb-2"><span class="font-semibold text-base">Native Name: </span> {item.name.nativeName[Object.keys(item.name.nativeName)[0]].common}</p>
  {/if}
  <p class="mb-2">
    <span class="font-semibold text-base">Population: </span>
    {item.population.toLocaleString("en-US")}
  </p>
  <p class="mb-2"><span class="font-semibold text-base">Region: </span> {item.region}</p>
  <p class="mb-2"><span class="font-semibold text-base">Sub Region: </span> {item.subregion}</p>
  <p class="mb-2"><span class="font-semibold text-base">Capital: </span> {item.capital}</p>
</div>
<p class="mb-2"><span class="font-semibold text-base">Top Level Domain: </span> {item.tld}</p>
{#if item.currencies }
<p class="mb-2">
  <span class="font-semibold text-base">Currencies: </span>
  {item.currencies[Object.keys(item.currencies)[0]].name}
</p>
{/if}
{#if item.languages}
<p class="mb-2">
  <span class="font-semibold text-base">Languages: </span>
  {Object.values(item.languages).join(", ")}
</p>
{/if}
<p class="mb-2"><span class="font-semibold text-base">Driving Side:</span> {item.car.side}</p>
<p class="mb-8">
  <span class="font-semibold text-base">Landlocked: </span>
  {#if item.landlocked}
    Yes
  {:else}
    No
  {/if}
</p>
{/if}
{/snippet}

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
    {#await country}
      <p class="text-center font-semibold">Fetching Country Info...</p>
    {:then country}
      <div>
        {#each country as item}
          {@render countryInfo(item)}
          <p class="font-semibold">Border Countries:</p>
          <p>{#if item.borders}
            {#each item.borders as border}
              <Button href='/detailed/{border}'>{border}</Button>
            {/each}
            {:else}
            No Border Countries
          {/if}</p>
         
        {/each}
      </div>
    {/await}
  </div>
</div>
