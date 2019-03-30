
package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Search {
    @Given("^I am on Google Search Page$")
    public void i_am_on_Google_Search_Page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Omo2nde\\IdeaProjects\\ACUKJATTrainig-\\Drivers\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("http://www.google.com");

    }


    @When("^i enter a search term \"([^\"]*)\"$")
    public void i_enter_a_search_term(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
       // throw new PendingException();
        System.out.println(arg1);
    }

    @When("^I click on the search button$")
    public void i_click_on_the_search_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^I should be shown a list of results relating to my search term$")
    public void i_should_be_shown_a_list_of_results_relating_to_my_search_term() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }
}
