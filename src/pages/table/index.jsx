import "../../App.css";
import { Table } from "antd";

function TablePage() {
    const data = [
        {
            name: 'Victor Nguyen',
            age: 23,
            address: 'Can Tho',
            key: '1'
        },
        {
            name: 'Victor Nguyen 2',
            age: 24,
            address: 'Can Tho',
            key: '2',
        },
        {
            name: 'Victor Nguyen 3',
            age: 10,
            address: 'Can Tho',
            key: '2'
        }
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
            render: value => {
                return <a>{value}</a>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key',
            sorter: (a, b) => a.age - b.age
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'key'
        },
        {
            title: 'Graduated?',
            key: 'key',
            render: payload => {
                return <span>{payload.age >= 18 ? 'True' : 'False'}</span>
            }
        }
    ]

    return (
        <div className="App">
            <header className="App-header">
                <Table columns={columns} dataSource={data} style={{ width: '500px' }} pagination></Table>
            </header>
        </div>
    );
}

export default TablePage;
