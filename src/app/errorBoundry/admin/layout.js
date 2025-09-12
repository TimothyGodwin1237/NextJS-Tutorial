import { redirect } from "next/navigation";

async function temp() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res({ role: '1' }) //rej({ role: '1' })
        }, 2000)
    })
}

// error throw in layout will not be caught in error.js of same folder
// it will be caught in nearest error.js of parent folder
// here error will be catched in errorBoundry/error.js

const AdminLayout = async ({ children }) => {
    const response = await temp();

    if (response?.role !== '1') {
        redirect('/dashboard/123')
    }

    return (
        <div>
            <nav>Admin Header</nav>
            {children}
        </div>
    )
}

export default AdminLayout
