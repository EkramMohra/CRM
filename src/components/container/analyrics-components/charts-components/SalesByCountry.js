import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,

} from "recharts";

class SalesByCountry extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      countries: [],
      countries_sale: [],
    };
  }

  async receivedData() {
    let client_data = await this.props.c.clientsN;
    let countries_data = await this.props.c.countries;
    let fillterd_data = client_data.data.filter((c) => c.sold === 1);
    this.setState({ clients: fillterd_data, countries: countries_data.data });
  }

  getHottestCountry = () => {
    let data = this.state.clients;
    let countries = this.state.countries;
    let countries_sale = [];
    let countriesStore = {};

    for (let client of data) {
      countriesStore[client.country_id] ?
        countriesStore[client.country_id]++ :
        countriesStore[client.country_id] = 1
    }
  
    for (let country_id in countriesStore) {
      countries_sale.push({
        name: countries[country_id].country,
        sales: countriesStore[country_id],
      });
    }
    this.setState({ countries_sale: countries_sale });
  };

  async componentDidMount() {
    await this.receivedData();
    this.getHottestCountry();
  }
  render() {
    return (
      <div>
        <h4>Sales By Country</h4>
        <BarChart
          width={600}
          height={325}
          data={this.state.countries_sale}
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
          <Bar dataKey="sales" fill="#890060" />
        </BarChart>
      </div>
    );
  }
}

export default inject("c")(observer(SalesByCountry));
