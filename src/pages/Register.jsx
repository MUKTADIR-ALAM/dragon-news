import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";

export default function Register() {

  const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form =  new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    createNewUser(email,password)
    .then((result) => { 
      const user = result.user;
      setUser(user);
      updateUserProfile({displayName:name,photoURL:photo})
      .then(()=>{
        navigate('/');
      })
      .catch((error)=>{
        console.log(error);
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10   ">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">


          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">Allready Have An Account ? <Link className="text-red-500" to={'/auth/login'}>Login</Link></p>
      </div>
    </div>
  )
}
