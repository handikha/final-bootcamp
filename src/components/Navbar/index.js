import AdminNav from "./admin.nav";
import UserNav from "./user.nav";

export default function Navbar({
  user,
  isLogin,
  setIsLogin,
  isSidebarActive,
  setIsSidebarActive,
}) {
  return user.role === 1 ? (
    <AdminNav
      user={user}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      isSidebarActive={isSidebarActive}
      setIsSidebarActive={setIsSidebarActive}
    />
  ) : (
    <UserNav user={user} isLogin={isLogin} setIsLogin={setIsLogin} />
  );
}
