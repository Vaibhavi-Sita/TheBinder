import React, { useState } from 'react'
import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  Box,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

function TwoSum() {
  const [nums, setNums] = useState('')
  const [target, setTarget] = useState('')
  const [steps, setSteps] = useState([])
  const [result, setResult] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [error, setError] = useState('')
  const [showVisualizer, setShowVisualizer] = useState(false) // State to toggle between screens

  const handleSolve = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/two-sum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nums: nums.split(',').map(Number),
          target: Number(target),
        }),
      })
      const data = await response.json()

      if (!data.steps || data.steps.length === 0) {
        throw new Error('No steps found in the response.')
      }

      setResult(data.result)
      setSteps(data.steps)
      setCurrentStep(0) // Start from the first step
      setError('') // Clear any previous errors
    } catch (err) {
      setError(
        'Failed to solve the problem. Please check your input and try again.'
      )
      console.error(err)
    }
  }

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps[currentStep]

  // Initial screen: Problem and Solution Code
  if (!showVisualizer) {
    return (
      <Container>
        <Typography variant='h3' gutterBottom>
          Two Sum Algorithm Visualizer
        </Typography>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant='h5' gutterBottom>
            Problem:
          </Typography>
          <Typography variant='body1' gutterBottom>
            Given an array of integers <code>nums</code> and an integer{' '}
            <code>target</code>, return indices of the two numbers such that
            they add up to <code>target</code>.
          </Typography>
          <Typography variant='body1' gutterBottom>
            You may assume that each input would have exactly one solution, and
            you may not use the same element twice.
          </Typography>
          <Typography variant='body1' gutterBottom>
            You can return the answer in any order.
          </Typography>
          <Typography variant='h6' gutterBottom>
            Example 1:
          </Typography>
          <Box
            component='pre'
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <code>
              Input: nums = [2,7,11,15], target = 9<br />
              Output: [0,1]
              <br />
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
            </code>
          </Box>
          <Typography variant='h6' gutterBottom>
            Constraints:
          </Typography>
          <Typography variant='body1' gutterBottom>
            2 &lt;= nums.length &lt;= 10<sup>4</sup>
            <br />
            -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
            <br />
            -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
            <br />
            Only one valid answer exists.
          </Typography>
          <Typography variant='h5' gutterBottom>
            Solution Code:
          </Typography>
          <Typography variant='h6' gutterBottom>
            1. Brute Force Method:
          </Typography>
          <Box
            component='pre'
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <code>
              {`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]
        return []`}
            </code>
          </Box>
          <Typography variant='h6' gutterBottom>
            2. One-pass Hash Table:
          </Typography>
          <Box
            component='pre'
            style={{
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <code>
              {`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i
        return []`}
            </code>
          </Box>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setShowVisualizer(true)}
            style={{ marginTop: '20px' }}
          >
            Go to Visualizer
          </Button>
        </Paper>
      </Container>
    )
  }

  // Visualizer Screen
  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        Two Sum Algorithm Visualizer
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          label='Numbers (comma-separated)'
          value={nums}
          onChange={(e) => setNums(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Target'
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          fullWidth
          margin='normal'
        />
        <Button variant='contained' color='primary' onClick={handleSolve}>
          Solve
        </Button>
      </Paper>
      {error && (
        <Typography variant='body1' color='error' gutterBottom>
          {error}
        </Typography>
      )}
      {result.length > 0 ? (
        <Typography variant='h5' gutterBottom>
          Result: [{result.join(', ')}]
        </Typography>
      ) : (
        steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                backgroundColor: '#ffebee',
                marginBottom: '20px',
              }}
            >
              <Typography variant='h6' style={{ color: '#c62828' }}>
                No solution found for the given target in the array.
              </Typography>
            </Paper>
          </motion.div>
        )
      )}
      {currentStepData && (
        <Box>
          <Typography variant='h6' gutterBottom>
            Step {currentStep + 1}: {currentStepData.description}
          </Typography>
          {/* Creative Visualization for Current Number and Complement */}
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap={4}
            marginBottom='20px'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#e3f2fd',
                }}
              >
                <Typography variant='h6' style={{ color: '#1976d2' }}>
                  Current Number
                </Typography>
                <Typography variant='h4' style={{ color: '#1976d2' }}>
                  {currentStepData.currentNumber}
                </Typography>
              </Paper>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#fff3e0',
                }}
              >
                <Typography variant='h6' style={{ color: '#ef6c00' }}>
                  Complement
                </Typography>
                <Typography variant='h4' style={{ color: '#ef6c00' }}>
                  {currentStepData.complement}
                </Typography>
              </Paper>
            </motion.div>
          </Box>
          {/* Visual Representation of the HashMap */}
          <Typography variant='body1' gutterBottom>
            Map State:
          </Typography>
          <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            {Object.entries(currentStepData.mapState).map(([key, value]) => (
              <Grid item key={key}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Paper
                    elevation={2}
                    style={{
                      padding: '10px',
                      textAlign: 'center',
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <Typography variant='body1'>🗝️ Key: {key}</Typography>
                    <Typography variant='body1'>📌 Value: {value}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          {/* Visual Representation of the Array */}
          <Typography variant='body1' gutterBottom>
            Array:
          </Typography>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            position='relative'
            style={{ marginBottom: '20px' }}
          >
            <Box display='flex' flexDirection='column' alignItems='center'>
              {/* Array Elements */}
              <Box display='flex'>
                {nums.split(',').map((num, index) => (
                  <Box
                    key={index}
                    style={{
                      padding: '10px',
                      border: '1px solid #ccc',
                      margin: '5px',
                      position: 'relative',
                    }}
                  >
                    <Typography variant='body1'>{num}</Typography>
                    {index === currentStepData.index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: 'absolute',
                          bottom: '-30px', // Position the arrow below the element
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <Typography
                          variant='body1'
                          style={{ color: '#1976d2', fontSize: '24px' }}
                        >
                          ↓ {/* Downward arrow */}
                        </Typography>
                      </motion.div>
                    )}
                  </Box>
                ))}
              </Box>
              {/* Indices */}
              <Box display='flex'>
                {nums.split(',').map((_, index) => (
                  <Box
                    key={index}
                    style={{
                      padding: '10px',
                      margin: '5px',
                      textAlign: 'center',
                      width: '50px', // Adjust width to match array elements
                    }}
                  >
                    <Typography variant='body2' style={{ color: '#666' }}>
                      {index}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          {currentStepData.description.includes('Complement found') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Typography
                variant='h6'
                style={{ color: 'green', marginTop: '20px' }}
              >
                Solution Found! Indices: [{result.join(', ')}]
              </Typography>
            </motion.div>
          )}
        </Box>
      )}
      <Box display='flex' justifyContent='space-between' marginTop='20px'>
        <Button
          variant='contained'
          color='secondary'
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous Step
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
        >
          Next Step
        </Button>
      </Box>
    </Container>
  )
}

export default TwoSum
