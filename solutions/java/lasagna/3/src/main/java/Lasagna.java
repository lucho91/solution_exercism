public class Lasagna {
    private static final int EXPECTED_MINUTES_IN_OVEN = 40;
    private static final int PREPARATION_TIME_PER_LAYER = 2;
    
    public int expectedMinutesInOven() {
        return Lasagna.EXPECTED_MINUTES_IN_OVEN;
    }
    
    public int remainingMinutesInOven(int m) {
        return this.expectedMinutesInOven() - m;
    }
    
    public int preparationTimeInMinutes(int nCapas) {
        return nCapas * Lasagna.PREPARATION_TIME_PER_LAYER;
    }
    
    public int totalTimeInMinutes(int nCapas, int m) {
        return this.preparationTimeInMinutes(nCapas) + m;
    }
}
