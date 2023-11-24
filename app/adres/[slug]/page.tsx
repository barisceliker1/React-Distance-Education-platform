"use client"


import  Header from '../../components/header'
import  Dictionary from '../../components/dictionary'


export default function page({params}) {
 const param = params.slug

    return (
        <>
        <Header/>
       <Dictionary slug = {param}/>

        </>
        
    );
}