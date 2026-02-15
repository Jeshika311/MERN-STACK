import React from 'react'

const ParamComp = () => {
    const {id} = useParams();
  return (
    <div>
      Params : {id}
    </div>
  )
}

export default ParamComp
