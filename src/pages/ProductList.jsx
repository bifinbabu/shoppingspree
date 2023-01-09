import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'

const Container = styled.div``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Title = styled.h1`
margin: 20px;
`
const Filter = styled.div`
margin: 20px;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>Filter</Filter>
            <Filter>Filter 2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList