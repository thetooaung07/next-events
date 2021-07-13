import { useRouter } from "next/dist/client/router";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filters! Adjust the values and Try again! </p>;
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filterEvents || filterEvents.length === 0) {
    return <p>No Events Found</p>
  }

  return (
    <div>
      <h1>Filtered Event Page</h1>
    </div>
  );
}

export default FilteredEventPage;
