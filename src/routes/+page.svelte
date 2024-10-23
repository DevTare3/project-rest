<script lang="ts">
  import * as Select from "$lib/components/ui/select";


  let { data } = $props();
  const { countries } = $derived(data);

  let inputCountry = $state("");
  
  let region : undefined  = $state();

  let continents  = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label:"America" },
    { value: "Asia", label: "Asia" },
    { value: 'Europe', label: "Europe" },
    { value: 
      "Oceania", label: "Oceania" }
  ];
  
  interface Country {
    flags: {
      svg:string;
    };
    name: {
      common: string;
      official:string;
    }
    region: string;
    capital: string;
    population: number;
    cca3: string;
    currencies: {
      name: string;
      symbol:string;
    }
  }

  function countrySearch()
  {
    let filter,ul ,li,txtValue,a;
    filter = inputCountry.toUpperCase();
    ul = document.getElementById("countryList");
    if(ul)
  {
    li = ul.getElementsByTagName('li')
  
    for(let i = 0; i < li.length; i++)
  {
    a = li[i].getElementsByTagName("h2")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1)
  {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
  }
  }
  }


</script>

<div class="bg-light-bg dark:bg-dark-bg px-6 py-8 ">
  <div class="lg:flex lg:gap-4 lg:items-center lg:justify-between">
    <div
      class="flex items-center shadow-xl dark:outline dark:outline-[.8rem] dark:outline-outline-dark px-8 gap-6 py-5 mb-8 lg:mb-0 rounded-md bg-white dark:bg-dark-el"
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
        bind:value={inputCountry} oninput={countrySearch}
        class="outline-none font-normal dark:placeholder:text-white border-none bg-white dark:bg-dark-el dark:text-white text-black lg:min-w-[25rem]"
        type="search"
        id="search"
        placeholder="Search for a country..."
        />
      </div>
    
      <Select.Root portal={null} bind:selected={region}>
        <Select.Trigger
          class="py-8 w-[55vw] shadow-xl dark:placeholder:text-white
    dark:bg-dark-el font-semibold text-base max-w-[15rem]"
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
                label={continent.label}
                >{continent.label}</Select.Item
              >
            {/each}
          </Select.Group>
        </Select.Content>
        <Select.Input name="region" />
      </Select.Root>
  </div>

  {#snippet loadCountries(country : Country)}
  <li  id = "item"
  class="bg-white shadow-xl mb-10 rounded-b-md dark:outline-outline-dark dark:text-white
  dark:bg-dark-el "
  >
  <a href="/detailed/{country.cca3}" data-sveltekit-preload-data>
    <button class="border-none p-0 m-0 text-left block">
          <div class="rounded-t-md ">
            <img
              class="rounded-t-md" 
              src={country.flags.svg}
              alt="the flag of {country.name.official}"
            />
          </div>
          <div class=" px-6 pt-6 pb-12 text-base dark:bg-dark-el">
            <h2 class="font-bold text-lg mb-3 searchName">{country.name.common}</h2>
            <p class="text-light-text font-light dark:text-white">
              <span class="font-semibold ">Population:</span>
              {country.population.toLocaleString("en-US")}
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
          </button>
    
  </a>  </li>
  {/snippet}


  

  <div class="flex items-center justify-center px-12 py-10">
    {#await countries}
      <p class="text-center font-semibold">Fetching Countries...</p>
    {:then countries}
    <div>
      <ul id ="countryList" class="lg:grid lg:grid-cols-4 lg:gap-14 ">
          {#if region !== undefined} 
          {#each countries as country}
            {#if country.region === region.value}
              {@render loadCountries(country)}
            {/if}
          {/each}
          {:else}
          {#each countries as country}
            {@render loadCountries(country)}
          {/each}
          {/if}
         
        </ul>
      </div>
    {/await}
  </div>
</div>
