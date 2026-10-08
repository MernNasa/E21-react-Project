import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Electronics",
  "Accessories",
];

const Navbar=()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auth,setAuth]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    let token=JSON.parse(localStorage.getItem("jwt_token"))
    if(token){
      setAuth(true)
    }
  },[])

  const handleLogout=()=>{
    localStorage.removeItem("jwt_token")
    navigate("/")
    setAuth(false)
  }


  return (
   <div className="w-full shadow">
       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="ShopEase home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </div>

          <div className="hidden sm:block">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Shop
              <span className="text-orange-500">Ease</span>
            </span>

            <p className="-mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Everything you love
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-900 transition-colors hover:text-orange-500"
          >
            Home
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Categories
              <ChevronDown
                size={15}
                className="transition-transform group-hover:rotate-180"
              />
            </button>

            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-500"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/new-arrivals"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            New Arrivals
          </Link>

          <Link
            to="/deals"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Deals
          </Link>
        </div>

        {/* Search */}
        <div className="hidden max-w-sm flex-1 px-6 xl:block">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search products..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search on tablet/mobile */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 xl:hidden"
            aria-label="Search"
          >
            <Search size={21} />
          </button>

          {/* Wishlist */}
          <button
            className="relative hidden h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:flex"
            aria-label="Wishlist"
          >
            <Heart size={21} />

            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-bold text-white">
              2
            </span>
          </button>
              {/* Cart */}
          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/30"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} strokeWidth={2.3} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-slate-900 px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>
          {/* Login */}
          {
            !auth ? <Link
            to="/login"
            className=" inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 cursor-pointer hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Login
          </Link>
          :
          <button
            
            className=" inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 cursor-pointer hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
            onClick={handleLogout}
          >
            Logout
          </button>
          
          }

          

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-lg lg:hidden">
          {/* Mobile Search */}
          <div className="relative mb-5">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search products..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10"
            />
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              className="block rounded-xl bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/categories"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Categories
            </Link>

            <Link
              to="/new-arrivals"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              New Arrivals
            </Link>

            <Link
              to="/deals"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              Deals
            </Link>

            <div className="my-3 h-px bg-slate-100" />

            <Link
              to="/login"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <User size={18} />
              Login
            </Link>

            <Link
              to="/wishlist"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              <Heart size={18} />
              Wishlist
            </Link>
          </div>
        </div>
      )}

   </div>
  );
}

export default Navbar;