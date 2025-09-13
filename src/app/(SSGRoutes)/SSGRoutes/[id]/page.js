import React from 'react'

const students = ['1', '2', '3', '4', '5']

export async function generateStaticParams() {
    return students.map((student) => ({
        id: student,
    }))
}

const SSGPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>SSGPage Generation {id}</div>
    );
};

export default SSGPage;
