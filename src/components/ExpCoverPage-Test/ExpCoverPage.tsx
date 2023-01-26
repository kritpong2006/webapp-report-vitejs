import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// Import By Project
import { printPDF } from '../../reports/ExpCoverPage/printpdf';
import classes from './ExpCoverPage.module.css';

export const ExpCoverPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        printPDF();
      }, 1000);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup size="sm">
          <InputLeftAddon children="Date" />
          <Input type="date" placeholder="Select Date" width={150} />
        </InputGroup>

        <Divider marginTop={2} marginBottom={2} />

        <RadioGroup defaultValue="1" size="sm">
          <Stack spacing={5} direction="row">
            <Radio value="1">Export</Radio>
            <Radio value="2">Import</Radio>
            <Radio value="3">Local Transport</Radio>
          </Stack>
        </RadioGroup>

        <InputGroup size="sm" marginTop={2}>
          <InputLeftAddon children="Job No." width={130} />
          <Input type="number" width={200} />
        </InputGroup>

        <Flex>
          <HStack>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="MAWB" width={130} />
                <Input type="number" width={200} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="HAWB" width={130} />
                <Input type="number" width={200} />
              </InputGroup>
            </Box>
          </HStack>
        </Flex>

        <InputGroup size="sm" marginTop={2}>
          <InputLeftAddon children="B/L No." width={130} />
          <Input type="number" width={200} />
        </InputGroup>

        <InputGroup size="sm" marginTop={2}>
          <InputLeftAddon children="Customer Name" width={130} />
          <Input type="text" width={200} />
        </InputGroup>

        <RadioGroup defaultValue="1" size="sm" marginTop={5}>
          <Stack spacing={5} direction="row">
            <Text as="b">Freight</Text>
            <Radio value="1">Prepaid</Radio>
            <Radio value="2">Collect</Radio>
          </Stack>
        </RadioGroup>

        <RadioGroup defaultValue="1" size="sm" marginTop={5}>
          <Text as="b">Service Type</Text>
          <Stack spacing={5} direction="row" marginTop={2}>
            <Radio value="1">Brink's FedEx</Radio>
            <Radio value="2">Sea Freight</Radio>
            <Radio value="3">DD</Radio>
            <Radio value="4">DA</Radio>
            <Radio value="5">AF</Radio>
            <Radio value="6">AD</Radio>
            <Radio value="7">HC</Radio>
          </Stack>
          <Stack spacing={5} direction="row" marginTop={2}>
            <Radio value="8">Customs Clearance</Radio>
            <Radio value="9">Post Service</Radio>
            <Radio value="10">Local Transportation</Radio>
          </Stack>
        </RadioGroup>

        <Box marginTop={5}>
          <Text as="b">Customs Formality</Text>
        </Box>

        <Box marginTop={2}>
          <CheckboxGroup>
            <table style={{ width: '70%' }}>
              <tr>
                <td>
                  <Checkbox size="sm">Normal</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Re-importation</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Re-export</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Blue Corner</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">19 Bi-section</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Transit</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Bonded Warehouse</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Re-importation</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">BOI</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">IGS Bond clearance</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">IGS VAT</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">IGS Bonded warehouse</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">ATA Carnet</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Free Zone</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">EPZ</Checkbox>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <Stack spacing={2} direction="row">
                    <Checkbox size="sm">Other</Checkbox>
                    <Input type="text" variant="filled" size="xs" width={200} />
                  </Stack>
                </td>
              </tr>
            </table>
          </CheckboxGroup>
        </Box>

        <Box marginTop={5}>
          <Text as="b">Documents</Text>
        </Box>

        <Box marginTop={2}>
          <CheckboxGroup>
            <table style={{ width: '70%' }}>
              <tr>
                <td>
                  <Checkbox size="sm">MAWB</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Customs entry</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Invoice</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">ใบเสร็จกรมศุลฯ</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">HAWB</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">D/O Doc.</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Credit note</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">ใบมอบอำนาจ</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Manifest</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">B/L</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Cheque</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">ธ.ต. 1</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Packing list</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">SLI</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Selling Price</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">ธ.ต. 2</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">C/O</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Passport</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Freight Invoice</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Arriving Soon</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Form A</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Air Ticket</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Doc Delivery slip</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Rough Dia. Certificate</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">LT Form</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">History note</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">ATA Carnet</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">BOI Document</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">แบบการโอนของนำเข้าฯ</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Form JTEPA</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">แบบแสดงรายละเอียดราคากรมฯ</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Form FTA</Checkbox>
                </td>
              </tr>
              <tr>
                <td>
                  <Checkbox size="sm">Cargo Receipt</Checkbox>
                </td>
                <td>
                  <Checkbox size="sm">Pro-Forma Invoice</Checkbox>
                </td>
                <td colSpan={2}>
                  <Stack spacing={2} direction="row">
                    <Checkbox size="sm">Other</Checkbox>
                    <Input type="text" variant="filled" size="xs" width={200} />
                  </Stack>
                </td>
              </tr>
            </table>
          </CheckboxGroup>
        </Box>

        <Box marginTop={5}>
          <Text as="b">Account Use Only</Text>
        </Box>

        <Flex>
          <HStack>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Invoice #" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Amount" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box paddingTop={2}>
              <Select
                defaultValue={'USD'}
                placeholder="Select option"
                size="sm"
              >
                <option value="USD">USD</option>
                <option value="THB">THB</option>
              </Select>
            </Box>
          </HStack>
        </Flex>

        <Flex>
          <HStack>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Invoice #" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Amount" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box paddingTop={2}>
              <Select
                defaultValue={'USD'}
                placeholder="Select option"
                size="sm"
              >
                <option value="USD">USD</option>
                <option value="THB">THB</option>
              </Select>
            </Box>
          </HStack>
        </Flex>

        <Flex>
          <HStack>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Invoice #" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup size="sm" marginTop={2}>
                <InputLeftAddon children="Amount" />
                <Input type="number" width={150} />
              </InputGroup>
            </Box>
            <Box paddingTop={2}>
              <Select
                defaultValue={'USD'}
                placeholder="Select option"
                size="sm"
              >
                <option value="USD">USD</option>
                <option value="THB">THB</option>
              </Select>
            </Box>
          </HStack>
        </Flex>

        <Flex gap={2} marginTop={2}>
          <Box width="10%">
            <Text>Reimbursement :</Text>
          </Box>
          <Box width="60%">
            <Textarea size="sm" />
          </Box>
        </Flex>

        <Stack direction="row" spacing={4} marginTop={5}>
          <Button isLoading={isSubmitting} type="submit" variant="solid">
            Print Form
          </Button>
          <Button type="reset" colorScheme="red" variant="outline">
            Clear Form
          </Button>
        </Stack>
      </form>
    </>
  );
};
