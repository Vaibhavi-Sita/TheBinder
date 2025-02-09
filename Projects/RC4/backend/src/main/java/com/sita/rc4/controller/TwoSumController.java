package com.sita.rc4.controller;
import com.sita.rc4.service.TwoSumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TwoSumController {

    private final TwoSumService twoSumService;

    @Autowired
    public TwoSumController(TwoSumService twoSumService) {
        this.twoSumService = twoSumService;
    }

    @PostMapping("/two-sum")
    public TwoSumService.TwoSumResponse twoSum(@RequestBody TwoSumRequest request) {
        return twoSumService.twoSum(request.getNums(), request.getTarget());
    }

    static class TwoSumRequest {
        private int[] nums;
        private int target;

        // Getters and setters
        public int[] getNums() {
            return nums;
        }

        public void setNums(int[] nums) {
            this.nums = nums;
        }

        public int getTarget() {
            return target;
        }

        public void setTarget(int target) {
            this.target = target;
        }
    }
}