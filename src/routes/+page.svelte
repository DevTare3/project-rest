<script lang="ts">
  import * as Select from "$lib/components/ui/select";

  

  let { data } = $props();
  const { countries } = $derived(data);
  const formattedNumber = new Intl.NumberFormat("en-US");

  let inputCountry = $state("");

  type Continent = {
    value: string;
    label: string;
  };


  let selectedCountry = $state("")

  let region: Continent | undefined = $state();

  let continents: Continent[] = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
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
  }


  function getCountry(e : any) {
    
    e.document.tog
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

<div class="bg-light-bg dark:bg-dark-bg px-6 py-8">
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
      bind:value={inputCountry} oninput={countrySearch}
      class="outline-none font-normal dark:placeholder:text-white border-none bg-white dark:bg-dark-el text-black w-full"
      type="search"
      id="search"
      placeholder="Search for a country..."
    />
  </div>


  {#snippet loadCountries(country : Country)}
  <li  id = "item"
  class="bg-white shadow-xl mb-10 rounded-b-md dark:outline-outline-dark dark:text-white
  dark:bg-dark-el"
  >
  <button class="border-none p-0 m-0 text-left block" onclick={getCountry}>
    <a href="/detailed">
    
        <div class="rounded-t-md">
          <img
            class="rounded-t-md"
            src={country.flags.svg}
            alt="the flag of {country.name.official}"
          />
        </div>
        <div class=" px-6 pt-6 pb-12 text-base dark:bg-dark-el">
          <h2 class="font-bold text-lg mb-3 searchName">{country.name.common}</h2>
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
    

      </a>
        </button>
    </li>
  {/snippet}

  
  <Select.Root portal={null} >
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
    <Select.Input name="region" />
  </Select.Root>

  <div class="flex items-center justify-center px-12 py-10">
    {#await countries}
      <p class="text-center font-semibold">Fetching Countries...</p>
    {:then countries}
      <div>
        <ul id ="countryList">
          {#each countries as country}
              {@render loadCountries(country)}
          {/each}
        </ul>
      </div>
    {/await}
  </div>
</div>
