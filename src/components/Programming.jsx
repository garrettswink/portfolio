import "../style/Programming.css"
import MernCard from "../components/MernCard"
import Python from "../assets/python2.jpg"
import SQL from "../assets/sql.jpg"
import Django from "../assets/django.png"
import MySQL from "../assets/MySQL-Logo.jpg"

export default function Additional(){
    return (
        <>
        <div className="programming-container">
            <div className="programming-header">
                <h1>Data + Programming Capabilities</h1>
            </div>
            <div className="programming-body">
               <MernCard 
               title="Python"
               logo={Python}
               description="I have a strong grasp of Python fundamentals, including data structures, control flow, and essential libraries."
        
               />
               <MernCard 
               title="SQL"
               logo={SQL}
               description="I am skilled in SQL database management, capable of writing queries, building and optimizing databases, and ensuring data integrity across relational databases."
               />
               <MernCard 
               title="Django"
               logo={Django}
               description="I leverage the Django framework for scalable web applications, efficient database interactions, and robust security for application protection."
             
               />
               <MernCard 
               title="MySQL"
               logo={MySQL}
               description="I am adept at leveraging MySQL to craft efficient queries, optimize database performance, and uphold data integrity within relational database systems."
               />
            </div>
        </div>
        </>
    )
}