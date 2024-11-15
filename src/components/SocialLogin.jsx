import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div>
        <button className="btn"><FaGoogle/>Login with Google</button>
        <button className="btn"><FaGithub/>Login with Github</button>
      </div>
    </div>
  );
}