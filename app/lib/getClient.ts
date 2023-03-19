import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://api-sa-east-1.hygraph.com/v2/clehxlq7c2iud01upb4227mwd/master",
        headers: {
          Autorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzcyMDY3NjksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xlaHhscTdjMml1ZDAxdXBiNDIyN213ZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjdlZDcyMTItZWI4Yy00MTFiLWJmODUtOTY2ODU4OGU3NWMxIiwianRpIjoiY2w2OWl3bTRlZG5yNjAxdDc5MWFiZDcxMyJ9.QZ1cferc9Yc9EyEdeRHPw9hyEqWyYzKIWPMdrtEu55540wc-FY250gAA4tpx2Mcw6KKd-Brra1TDZNfcqdF8YDHH6eU46gguor9F2naCxUwV_VPMUwMDRR4iRwY3ogEuOZOen_kv8-BLGTV6VMOb3Fj8aXzwZ2AJUdxW2OwvWmneMSpIQZcODToqXileOK3VjuLkNa_3cnvhRw2-mhJn38LHmgDXI4ukdlkpzw99O8zdSb6I9Iw3NBwSHyhD8d_Ce5Ywo-blVoEvpOCgSfJl7WKGsXgIx7Ai1h6lbbnJtGF0IspaOZv-7sq5BKPDCAnA60E2rbAFQSv2MhduogGKZEm6shRQur92YOf22KJUmAxOZkzH9zUWHO1V292Lg8TdZoEN2eMW8nf9pV41Cv7u3WBEShvtK7kBLJRH62FvKM7pnReOezZoGTuFsICyTGnxyyEgglzPehR5jkkbQy_QuOxnaPMVIXlomgOF7T1Bnqt6UekBRRGGJ2BiQez79ZFRTt_ZjcbhdhPNGV69yALk97ZHHuwF2eZ-joc-pZrhw6JIC073dl6L2dVzugJHKgdTLWyJLQE1lSCYP7tt7clZjX3horAL55rdwzXXVUpS5Jdl_IOzEa9ogdqFstlIyuAaEkcwWF0xDPjXQxht02mbV04Wl3zhPYdtiki8tBjMcWk"}`,
        },
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
