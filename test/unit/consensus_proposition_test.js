var expect = require('chai').expect

import ConsensusProposition from '../../src/js/components/consensus_proposition'

describe('A consensus proposition', () => {
  it('is submittable if all fields are added', ()=>{
    let consensusProposition = new ConsensusProposition()
    consensusProposition.setCircle(["sample@sample.com"])
    consensusProposition.setProposal("This is a string.")
    consensusProposition.setProposer("proposer@proposer.com")
    consensusProposition.checkSubmitable()
    expect(consensusProposition.submittable).to.be.true
  })

  it('is not submittable if some field are not added', ()=>{
    let consensusProposition = new ConsensusProposition()
    consensusProposition.setCircle(["sample@sample.com"])
    consensusProposition.checkSubmitable()
    expect(consensusProposition.submittable).to.be.false
  })
})
