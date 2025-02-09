package com.sita.rc4.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TwoSumService {
    public TwoSumResponse twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        List<StepDetail> steps = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            steps.add(new StepDetail(i, nums[i], complement, new HashMap<>(map), "Checking if complement exists in the map."));

            if (map.containsKey(complement)) {
                steps.add(new StepDetail(i, nums[i], complement, new HashMap<>(map), "Complement found! Solution identified."));
                return new TwoSumResponse(new int[]{map.get(complement), i}, steps);
            }

            map.put(nums[i], i);
            steps.add(new StepDetail(i, nums[i], complement, new HashMap<>(map), "Adding current number to the map."));
        }

        steps.add(new StepDetail(-1, -1, -1, new HashMap<>(map), "No solution found."));
        return new TwoSumResponse(new int[]{}, steps); // Return empty result and steps
    }

    public static class TwoSumResponse {
        private final int[] result;
        private final List<StepDetail> steps;

        public TwoSumResponse(int[] result, List<StepDetail> steps) {
            this.result = result;
            this.steps = steps;
        }

        public int[] getResult() {
            return result;
        }

        public List<StepDetail> getSteps() {
            return steps;
        }
    }

    public static class StepDetail {
        private final int index;
        private final int currentNumber;
        private final int complement;
        private final Map<Integer, Integer> mapState;
        private final String description;

        public StepDetail(int index, int currentNumber, int complement, Map<Integer, Integer> mapState, String description) {
            this.index = index;
            this.currentNumber = currentNumber;
            this.complement = complement;
            this.mapState = mapState;
            this.description = description;
        }

        public int getIndex() {
            return index;
        }

        public int getCurrentNumber() {
            return currentNumber;
        }

        public int getComplement() {
            return complement;
        }

        public Map<Integer, Integer> getMapState() {
            return mapState;
        }

        public String getDescription() {
            return description;
        }
    }
}