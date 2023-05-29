// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
  password: 'makeAGoodPasswordThatIsAtLeast32CharactersLong',
  cookieName: "iron-session/examples/next.js",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
