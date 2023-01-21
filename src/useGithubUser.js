import { useEffect, useState } from "react";

export function useGithubUser(param) {
  // console.log(param);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${param}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("NEW GITHUB USER NAME: ", json.name);

        setData(json);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [param]);

  if (data) {
    return {
      data: data,
      name: data.name,
    };
  } else {
    return {
      data: data,
      message: "No Data!",
    };
  }
}
