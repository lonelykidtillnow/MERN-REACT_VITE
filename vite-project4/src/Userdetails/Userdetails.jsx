const Userdetails = (props) => {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    table {\n      width: 80%;\n      border-collapse: collapse;\n      margin: 20px auto;\n      font-family: Arial, sans-serif;\n    }\n\n    th, td {\n      border: 1px solid #dddddd;\n      padding: 10px;\n      text-align: center;\n    }\n\n    th {\n      background-color: #007bff;\n      color: white;\n    }\n\n    tr:nth-child(even) {\n      background-color: #f2f2f2;\n    }\n  "
                }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone No</th>
                        <th>Salary</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{props.gender}</td>
                        <td>{props.phoneno}</td>
                        <td>{props.salary}</td>
                        <td>{props.company}</td>
                    </tr>
                    {/* Add more rows here if needed */}
                </tbody>
            </table>
        </>
    )
}
export default Userdetails;