import { redirect } from "next/navigation";

async function temp() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res({ role: '1' }) //rej({ role: '1' })
        }, 2000)
    })
}

// error.js
// error throw in layout will not be caught in error.js of same folder
// it will be caught in nearest error.js of parent folder
// here error will be catched in errorBoundry/error.js

// but in something causing error in page.js of same folder will trigger error.js of same folder
// here error will be shown from errorBoundry/admin/loading.js


// loading.js
// Anything that is delaying in layout will not trigger the loading.js of same folder
// it will trigger the nearest loading.js of parent folder

// but in something causing delay in page.js of same folder will trigger loading.js of same folder
// here loading will be shown from errorBoundry/admin/loading.js

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
