import React from 'react'

const students = ['1', '2', '3', '4', '5']

export const revalidate = 10; // revalidate this page every 60 seconds
export const dynamicParams = true; // false: any params not returned by generateStaticParams will result in a 404 page

export async function generateStaticParams() {
    return students.map((student) => ({
        id: student,
    }))
}

const ISRPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>ISRPage Generation {id}</div>
    );
};

export default ISRPage;
