import styled from "@emotion/styled"
import { useDispatch } from "react-redux"
import adminLogoutAPI from "../../API/Admin/adminLogout"
import { adminLogout } from "../../Redux/Slices/admin.slice"
import Alliance from "../Alliance"
import Trading from "../Trading"

const AdminDash = () => {
  const dispatch = useDispatch()
  const logout = async () => {
    try {
      await adminLogoutAPI()
      dispatch(adminLogout())
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <StyledAdminDash>
      <header>
        <h1>Admin</h1>
        <button onClick={logout}>Logout</button>
      </header>
      <Alliance />
      <Trading />
    </StyledAdminDash>
  )
}

const StyledAdminDash = styled.section`
  width: 100%;
  height: auto;

  padding: var(--padding);

  h1 {
    color: var(--text);
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: calc(var(--padding) / 3);
      background: var(--secondary);
      border-radius: 10px;
    }
  }
`

export default AdminDash
