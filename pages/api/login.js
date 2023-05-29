import { Octokit } from "octokit";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
const octokit = new Octokit();

/*
export default function handler(req, res) {
	console.log(sessionOptions);
  res.status(200).json({ name: 'John Doe' });
}*/


export default withIronSessionApiRoute(async (req, res) => {
	
  const { username } = await req.body;

  try {
    const {
      data: { login, avatar_url },
    } = await octokit.rest.users.getByUsername({ username });

    const user = { isLoggedIn: true, login, avatarUrl: avatar_url };
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);

