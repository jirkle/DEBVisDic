package cz.fi.muni.pb138.DEBVisDic.controller;

import cz.fi.muni.pb138.DEBVisDic.service.interfaces.IliService;
import org.hibernate.validator.constraints.NotEmpty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;


/**
 * Ili controller class
 *
 * @author Tomas Kopecky
 */
@CrossOrigin(origins = {"https://localhost:8443", "https://abulafia.fi.muni.cz:9011", "https://abulafia.fi.muni.cz:9001"})
@Validated
@RestController
@RequestMapping(value = "/ili")
public class IliController {

    private static final Logger logger = LoggerFactory.getLogger(IliController.class);


    @Autowired
    IliService iliService;

    /**
     * Controller method for getting ili from .tab file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="/tab30", method = RequestMethod.GET)
    public String getIliTab30(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        String result = "Nope";
        id = id.toLowerCase();
        /**
        if (id.startsWith("eng")) {
            id = id.substring(3);
            String version = id.substring(0, 2);
            id = id.length() > 10 ? id.substring(id.length() - 10) : id;

            result = iliService.getIliTab30(id);
        }**/
        return result = iliService.getIliTab30(id);
    }

    /**
     * Controller method for getting ili from .tab file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="tab31", method = RequestMethod.GET)
    public String getIliTab31(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTab31(id);
    }


    /**
     * Controller method for getting ili from .tab file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="ttl30", method = RequestMethod.GET)
    public String getIliTtl30(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl30(id);
    }

    /**
     * Controller method for getting ili from .tab file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="ttl31", method = RequestMethod.GET)
    public String getIliTtl31(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl31(id);
    }

    /**
     * Controller method for getting ili from .ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="ttl13", method = RequestMethod.GET)
    public String getIliTtl13(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtl13(id);
    }

    /**
     * Controller method for getting ili from .ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="ttlmap", method = RequestMethod.GET)
    public String getIliTtlMap(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliTtlMap(id);
    }

    /**
     * Controller method for getting ili from .ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="csv", method = RequestMethod.GET)
    public String getIliCsv(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliCsv(id);
    }

    /**
     * Controller method for getting ili from .ttl file saved on server
     *
     * @param id id we are looking for
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong
     */
    @RequestMapping(value="mainttl", method = RequestMethod.GET)
    public String getMainTtl(@NotEmpty(message = "id cannot be empty") @RequestParam(value = "id") String id) throws IOException {
        return iliService.getIliMainTtl(id);
    }

}
