import Mapir from "./component/Mapir";

const mapirApiKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM2ZjVkYzFjNGQ3ZjMxNmFkZDE5Njc3MTliMjNhZDFiOTQ1Nzg2ZmJhOWVkNzBhZDdmNTMwNmFjOWY3OTNjNzI4NjM0YTlmMGQ2N2IwNmY3In0.eyJhdWQiOiIyMDA4NyIsImp0aSI6ImM2ZjVkYzFjNGQ3ZjMxNmFkZDE5Njc3MTliMjNhZDFiOTQ1Nzg2ZmJhOWVkNzBhZDdmNTMwNmFjOWY3OTNjNzI4NjM0YTlmMGQ2N2IwNmY3IiwiaWF0IjoxNjY5MDk2ODczLCJuYmYiOjE2NjkwOTY4NzMsImV4cCI6MTY3MTYwMjQ3Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.r5EUqb9v6QDkS44OUQ8jxe19E3sdhZWFyGAPfrLvJ8TKMtxkKVipSdNUqmSTewng6595y3J7nWfCAYInAE4nSYm0oOxjIBu9Cs2vPhrpl3rrALbrVWi5MfmO1u6C176qy5oLM7Y6JY2bBVDJkpfZct_jKpo75C8BzB8jMwp1KAb0rO3evboszfNnoQ5H_VaZFrKIoXCea0YfcCRKtsrTtpGEWGPolk-_ITLNbtgHz8ust-TjeYKDHsS4OypptcJNkm83K5I74OjSMNblpza44ZxW8bSTZviQu7FTSuI2tfz27MQ7ijpLZHio23ps_yepvL_ejvhEEVdzkU4vIU5i2A";

function App() {
  return (
    <Mapir
      initialViewState={{
        longitude: 51.375433528216654,
        latitude: 35.73356434056531,
        zoom: 11,
      }}
      style={{ width: 600, height: 400 }}
      // replaced mapboxAccessToken 
      MapirToken={mapirApiKey}
      mapStyle="https://map.ir/vector/styles/main/mapir-xyz-style.json"
    />
  );
}

export default App;
