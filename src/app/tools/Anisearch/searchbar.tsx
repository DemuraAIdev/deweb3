'use client'
import React, { useState, useEffect } from 'react'
import CardMini from './Card'

interface SearchResult {
  node: {
    id: string
    title: string
    main_picture: {
      large: string
    }
  }
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]) // Provide the correct type information

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/animelist/search?q=${searchTerm}`)
        const { data } = await response.json()
        setSearchResults(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (searchTerm) {
      fetchData()
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Provide the correct type information
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="mb-5 mt-1 block w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
        placeholder="Search..."
      />
      <div className="-m-4 flex flex-wrap">
        {searchResults?.map((item) => (
          <CardMini
            key={item.node.id}
            id={item.node.id}
            picture={item.node.main_picture}
            title={item.node.title}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchBar
