## GraphQL tests
GraphQL helps us with:
 - `under fetching`: when my HTTP route brings less info than I need
 - `over fetching`: when my HTTP route brings more info than I need


###
simple-server.ts is a small GraphQL test (schema first)

Run: `npm run dev:simple`

- Create user:
  ```
    mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
    }
  }
  ```

  ```
  {
    "name": "John Doe"
  }
  ```

- Query user:
  ```
  query Users {
    users {
      id
    }
  }
  ```


###
server.ts is a small GraphQL test (code first)

Run: `npm run dev`

- Create appointment:
  ```
  mutation CreateAppointment($data: CreateAppointmentInput!) {
    createAppointment(data: $data) {
      startsAt
      endsAt
    }
  }
  ```

  ```
  {
    "data": {
      "customerId": "1",
      "startsAt": "2024-10-22T15:00:00.000Z",
      "endsAt": "2024-10-22T15:30:00.000Z"
    }
  }
  ```

- Query 
  ```
  query Customer {
    appointments {
      startsAt
      endsAt
      customer {
        name
      }
    }
  }
  ```




### References
https://www.youtube.com/watch?v=1dz48pReq_c
https://graphql.org/
https://typegraphql.com/
