
export const handler = () => {
  // Be Careful to not leak sensitive information ❗️
  console.log(process.env.MY_SUPER_SECRET_API_KEY)
}
