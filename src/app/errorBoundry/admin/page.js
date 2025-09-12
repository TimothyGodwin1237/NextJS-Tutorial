import { pause } from '@/lib/utils'
import React from 'react'

async function temp() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res({ role: '1' })
        }, 2000)
    })
}

const Adminpage = async () => {
    await pause(3000)
    const posts = await temp();
    return (
        <div>
            <p>Admin Page</p>
        </div>
    )
}

export default Adminpage
