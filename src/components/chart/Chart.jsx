import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
     
      amt: 2400,
    },
    {
      name: 'feb',
     
      amt: 2210,
    },
    {
      name: 'march',
      
      amt: 2290,
    },
    {
      name: 'april',
     
      amt: 2000,
    },
    {
      name: 'may',
     
      amt: 2181,
    },
    {
      name: 'june',
    
      amt: 2500,
    },
    {
      name: 'july',
     
      amt: 2100,
    },
  ];

const Chart = () => {
  return (
    <div className="chart">
       <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amt" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart
