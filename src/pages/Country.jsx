import { Link, useParams } from "react-router-dom";
import { useFetchCountry } from "../useFetchCountry";
import ShowMessage from "../components/ShowMessage";

const Country = () => {
  const { country } = useParams();
  const { countryInfo, isLoading, isError } = useFetchCountry(country);

  return (
    <>
      {isLoading && <ShowMessage>Loading Data ...</ShowMessage>}
      {isError && <ShowMessage>Somthing went wrong!</ShowMessage>}
      {!isError && !isLoading && (
        <div>
          <Link to="/" className="mb-10 inline-block p-3">
            <svg
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect x="14" y="8" width="42" height="40" rx="6" fill="white" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
                fill="#111827"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-8/12 justify-self-center"
              src={countryInfo?.flags?.svg}
              alt={countryInfo?.flags?.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {countryInfo?.name?.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-32 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(countryInfo?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{countryInfo?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    <span className="font-light">{countryInfo?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{countryInfo?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {countryInfo?.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="block font-light">
                      {countryInfo?.currencies &&
                        Object.values(countryInfo?.currencies)
                          .map((currency) => `${currency.name}`)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {countryInfo?.languages &&
                        Object.values(countryInfo?.languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
