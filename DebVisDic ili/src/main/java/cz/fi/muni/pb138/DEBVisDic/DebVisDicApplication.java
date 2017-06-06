package cz.fi.muni.pb138.DEBVisDic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EntityScan(
        basePackages = {
                "cz.fi.muni.pb138.DEBVisDic"
        }
)
public class DebVisDicApplication extends WebMvcConfigurerAdapter {

    /**
     * Main class launcher, launches whole spring boot app
     *
     * @param args arguments for main class
     */
    public static void main(String[] args) {
        SpringApplication.run(DebVisDicApplication.class, args);
    }
}


