<script>
  import carsData from './../dummy.json';

  let cars = carsData.cars || [];
  let selectedCar = null;
  let showFilter = false;
  let filter = "";

  function selectCar(car) {
    selectedCar = car;
  }

  function toggleFilter() {
    showFilter = !showFilter;
  }

  function handleFilterChange(event) {
    filter = event.target.value;
  }
  function handleKeyDown(event, car) {
    if (event.key === 'Enter') {
      selectCar(car);
    }
  }
</script>

<style>
  .sidebar {
    width: 200px;
    height: 1000px;
    padding: 20px;
    background-color: #f0f0f0;
    float: left;
  }

  .main {
    padding: 20px;
    margin-left: 300px;
  }

  .car {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ddd;
    cursor: pointer;
  }

  .car:hover {
    background-color: #ccc;
  }
</style>

<div class="sidebar">
  <button on:click={toggleFilter}>Filter</button>
  {#if showFilter}
    <input type="text" placeholder="Filter by name" on:input={handleFilterChange} />
  {/if}

  {#each cars as car}
  {#if !filter || car.name.toLowerCase().includes(filter.toLowerCase())}
    <div class="car" on:click={() => selectCar(car)} on:keydown={(e) => handleKeyDown(e, car)} tabindex="0">{car.name}</div>
  {/if}
{/each}

</div>

<div class="main">
  {#if selectedCar !== null}
    <h1>{selectedCar.name}</h1>
    <p>Type: {selectedCar.type}</p>
    <p>Model: {selectedCar.model}</p>
  {/if}
</div>
